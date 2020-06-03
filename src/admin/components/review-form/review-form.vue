<template lang="pug">
    form(@submit.prevent='postReview' method='POST').add-review
        .form__title Добавить отзыв
        hr
        .form__col
            .left__col
                .reviews-editor__avatar.eror__wrapper(@drop.prevent='photoChanged' @dragover.prevent='')
                    .avatar__wrapper(v-if="renderedPhoto.length > 0")
                        img(v-if="renderedPhoto.length > 0" :src="renderedPhoto").file-drop__background-pi  
                    .avatar__wrapper(v-else)
                        .avatar__man         
              
                    a(@click="$refs.file.click()" type="button").reviews-editor__avatar-btn Добавить фото
                        input(type="file" @change="photoChanged($event)" ref="file" accept="image/png, image/jpeg").reviews-editor__input
                       
             
            .right__col
                .form__row.form__row-up
                    label(for='name-user').form__label--review.form__label--up Имя автора
                        input(v-model.trim="selectedReview.author"  type='text' name='name-user' required).reviews-input
                        
                    label.form__label--review.form__label--up Титул автора
                        input(v-model.trim="selectedReview.occ" type='text' required).reviews-input
                        
                .form__row
                    label.form__label--review.form__label--message Отзыв
                        textarea(v-model.trim="selectedReview.text" rows='3').message
                        
                .btn-reviews
                    button(@click="cancelEditor" type='reset').btn-cancel Отмена
                    button(:disabled="submitStatus === 'PENDING'" ).btn-save Сохранить
</template>

<style lang="postcss" scoped>
@import '../../default.pcss';
    .avatar__wrapper{
        overflow: hidden;
    }
    .file-drop__background-pic {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        height: 100%;
        width: 100%;
        display: flex;
    }
    .reviews-editor__avatar-btn {
        color: #383bcf;
        font-family: "Open Sans";
        font-size: 16px;
        font-weight: 700;
        line-height: 33.89px;
        margin-top: 20px;
    }
    .reviews-editor__input {
        display: none;
    }
    .reviews-editor__avatar {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 30px;
        padding-left: 10%;
        padding-right: 10%;
    }
    .reviews-editor__avatar-wrapper {
        background-color: #dee4ed;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
    }

    .add-review{
        margin-bottom: 30PX;
        @include phones{
            padding: 30PX 0;
        }
    }
    .form__row-up{
        @include tablets{
            display: flex;
            flex-direction:column;
        }
    }
    .reviews-input{
         @include tablets{
           
            padding: 20px 0 20px;
            margin-bottom: 40px;
        }
    }

</style>
<script>
import { mapActions } from "vuex";
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
    data() {
        return {
            submitStatus: null,
            renderedPhoto: "",
        };
    },
    computed: {
        editorTitle: function () {
        return this.selectedReview.id < 0
            ? "Добавление Отзыва"
            : "Редактирование Отзыва";
        },
    },
    props: {
        selectedReview: {
            type: Object,
            default: () => {},
            required: true,
        },
    },
    mounted() {
        this.renderedPhoto =
        this.selectedReview.photo.length > 0
            ? "https://webdev-api.loftschool.com/" + this.selectedReview.photo
            : "";
    },
    methods: {
        ...mapActions("reviews", ["upsertReview", "closeReviewInEditor"]),
            async postReview() {
            
            try {
                await this.upsertReview(this.selectedReview);
            } catch (error) {
          
            } finally {
                this.submitStatus = "OK";
            }
        
        },
            async cancelEditor() {
        try {
            await this.closeReviewInEditor();
        } catch (error) {
            // handling error
        }
        },
        photoChanged() {
        var files = event.target.files || event.dataTransfer.files;
        if (!files.length) {
            return;
        }
        this.selectedReview.photo = files[0];
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
        }
    }
}
    
   

</script>