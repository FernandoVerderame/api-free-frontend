<script>
import { store } from '../data/store';
import axios from 'axios';
const categoriesUrl = 'http://localhost:3000/categories/';
const tagsUrl = 'http://localhost:3000/tags/';
const defaultEndpoint = 'http://localhost:3000/posts/';
const defaultForm = { title: '', categoryId: null, content: '', tags: [], published: true, image: null, userId: null };

export default {
    name: 'NewPost',

    data: () => ({
        store,
        categories: [],
        tags: [],
        form: defaultForm,
        isAlertOpen: false
    }),

    methods: {
        fetchCategories(endpoint) {
            store.isLoading = true;
            axios.get(endpoint ?? categoriesUrl)
                .then(res => {
                    this.categories = res.data;
                    this.isAlertOpen = false;
                })
                .catch(err => {
                    console.error(err);
                    this.isAlertOpen = true;
                })
                .then(() => {
                    store.isLoading = false;
                })
        },
        fetchTags(endpoint) {
            store.isLoading = true;
            axios.get(endpoint ?? tagsUrl)
                .then(res => {
                    this.tags = res.data;
                    this.isAlertOpen = false;
                })
                .catch(err => {
                    console.error(err);
                    this.isAlertOpen = true;
                })
                .then(() => {
                    store.isLoading = false;
                })
        },

        submitForm() {
            store.isLoading = true;
            axios.post(defaultEndpoint, this.form)
                .then(() => {
                    this.form = { ...defaultForm };
                    console.log('Data inviati');
                })
                .catch(err => {
                    console.error('Errore durante l\'invio', err);
                })
                .then(() => {
                    store.isLoading = false;
                });
        }
    },

    created() {
        this.fetchCategories();
        this.fetchTags();
    }
}
</script>

<template>
    <form @submit.prevent="submitForm" novalidate>
        <div class="row">
            <div class="col-6">
                <div class="my-5">
                    <label for="title">Titolo</label>
                    <input type="text" class="form-control" id="title" name="title" v-model.trim="form.title"
                        placeholder="Titolo del Post">
                </div>
            </div>
            <div class="col-6">
                <div class="my-5">
                    <label for="category">Categorie</label>
                    <select class="form-select" name="categoryId" v-model="form.categoryId">
                        <option selected disabled>Seleziona categoria</option>
                        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name
                            }}</option>
                    </select>
                </div>
            </div>
            <div class="col-12">
                <div class="mb-5">
                    <label for="content">Descrizione</label>
                    <div class="form-floating">
                        <textarea class="form-control" name="content" v-model.trim="form.content"
                            placeholder="Descrizione del Post..." id="content"></textarea>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex gap-4">
                    <div v-for="tag in tags" :key="tag.id" class="form-check">
                        <input class="form-check-input" type="checkbox" :name="`tags[${tag.id}]`" :value="tag.id"
                            :id="`tag-${tag.id}`" v-model="form.tags">
                        <label class="form-check-label" :for="`tag-${tag.id}`">{{ tag.name }}</label>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="published" name="published"
                        :value="true" v-model="form.published" checked>
                    <label class="form-check-label" for="published">Pubblicato</label>
                </div>
            </div>
            <div class="col-12 mt-3">
                <button type="submit" class="btn btn-primary">Invia</button>
            </div>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>