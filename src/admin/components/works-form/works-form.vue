<template lang="pug">
    form(@submit.prevent='postWork' method='POST').form__add
        .form__title Добавление работы
        hr
        table.table-work
            .add__picture(@drop.prevent='photoChanged' @dragover.prevent='')
                img(v-if="renderedPhoto.length > 0" :src="renderedPhoto").add__picture-img
                h3.title-save Перетащите или загрузите для загрузки изображение
                button(@click="$refs.file.click()" type="button").btn-load.btn-fake Загрузить
                input(@change="photoChanged($event)" ref="file" type="file" accept="image/png, image/jpeg").btn__input
            .desc__form
                label.label-work Название
                input(v-model.trim="selectedWork.title" type='text'  ).input-work
                label.label-work Ссылка
                input(v-model.trim="selectedWork.link" type='text' ).input-work
                label.label-work Описание
                textarea(v-model.trim="selectedWork.description"  rows="4").textarea-work
                label.label-work Добавление тэга
                input(required).input-work(v-model.trim="selectedWork.techs" type='text' )
                .works-editor__form-row
                    .works-editor__tags
                        ul(v-show="tags.length > 0").tags
                            li(v-for="tag in tags").tags__item {{tag}}
                                a(@click.prevent="removeTag(tag)").tags__cross
                .btn-work
                    button(@click="cancelEditor" type='reset').btn-cancel Отмена
                    button().btn-save Сохранить
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
    data() {
        return {
            submitStatus: null,
            renderedPhoto: "",
        };
    },
    computed: {
        tags: function () {
            var t = this.selectedWork.techs.split(",");
            if (t[0] == "" && t.length == 1) return [];
            return t;
    },
        editorTitle: function () {
            return this.selectedWork.id < 0
                ? "Добавление Работы"
                : "Редактирование Работы";
        },
    },
    props: {
        selectedWork: {
            type: Object,
            default: () => {},
            required: true,
        },
    },
    validations: {
        selectedWork: {
            title: {
                required,
            },
            link: {
                required,
            },
            description: {
                required,
            },
            photo: {
                required,
            },
        },
    },
    mounted() {
        this.renderedPhoto =
        this.selectedWork.photo.length > 0
            ? "https://webdev-api.loftschool.com/" + this.selectedWork.photo
            : "";
    },
    methods: {
        ...mapActions("works", ["upsertWork", "closeWorkInEditor"]),
        async postWork() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = "ERROR";
            } else {
                this.submitStatus = "PENDING";
            try {
                await this.upsertWork(this.selectedWork);
            } catch (error) {
                } finally {
            this.submitStatus = "OK";
            }
            }
        },
        async cancelEditor() {
            try {
                 await this.closeWorkInEditor();
            } catch (error) {
        
            }
        },
        removeTag(tagToRemove) {
            console.log(tagToRemove);
        var newTags = this.selectedWork.techs.split(",");
            for (var i = 0; i < newTags.length; i++) {
            if (newTags[i].trim() == tagToRemove.trim()) {
            newTags.splice(i, 1);
            }
        }
        this.selectedWork.techs = newTags.join(",");
        },
        photoChanged() {
            var files = event.target.files || event.dataTransfer.files;
            if (!files.length) {
                return;
        }
        this.selectedWork.photo = files[0];
        this.renderImageFile(files[0]);
        },
        renderImageFile(file) {
        const reader = new FileReader();
        try {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                this.renderedPhoto = reader.result;
            };
        } catch (error) {
            throw new Errow("Ошибка при чтении файла");
         }
        },
    }
}
</script>

<style lang="postcss">
@import '../../default.pcss';

    .form__title{
        font-size: 18px;
        font-family: "Open Sans";
        color: rgb(65, 76, 99);
        font-weight: bold;
        line-height: 1.889;
        padding-bottom: 10px;
        @include phones{
            padding: 25PX 20PX 15PX;
        }
 

    }
   
    .add__picture-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        height: 100%;
        width: 100%;
        z-index: 10;
    }

    .btn-fake {
        border-radius: 25px;
        background-color: #ffffff;
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        color: #ffffff;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 48px;
        text-transform: uppercase;
        padding-left: 40px;
        padding-right: 40px;
        margin-top: 20px;
        z-index: 1;
        outline: none;
    }  

    .btn__input {
        display: none;
    }

    .works-editor__form-row {
        display: flex;
        padding-bottom: 30px;
    }

    .tags {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .tags__item {
        display: inline-flex;
        border-radius: 22px;
        background-color: rgba(#859fc2, 0.1);
        font-family: "Open Sans";
        color: rgba(#464d62, 0.7);
        font-size: 15px;
        font-weight: 700;
        padding: 10px 16px;
        padding-right: 20px;
        margin-right: 16px;
        align-items: center;
    }

    .tags__cross {
        display: flex;
        width: 12px;
        height: 12px;
        opacity: 0.5;
        position: relative;
    }

    .tags__cross:hover {
        opacity: 1;
    }

    .tags__cross:before,
    .tags__cross:after {
        position: absolute;
        left: 0.9375rem;
        content: " ";
        height: 100%;
        width: 2px;
        background-color: #464d62;
    }

    .tags__cross:before {
        transform: rotate(45deg);
    }

    .tags__cross:after {
        transform: rotate(-45deg);
    }

    .form__add{
        background-color: #fff;
        padding: 30PX 30PX 30PX;
        box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
        @include phones{
            padding: 0;
        }
    }
</style>