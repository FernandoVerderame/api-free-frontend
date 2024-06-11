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
    }),

    methods: {
        fetchCategories(endpoint) {
            store.isLoading = true;
            axios.get(endpoint ?? categoriesUrl)
                .then(res => {
                    this.categories = res.data;
                })
                .catch(err => {
                    console.error(err);
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
                })
                .catch(err => {
                    console.error(err);
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
    <section id="form-section">
        <div class="card w-50 mt-5">
            <div class="card-header text-center">
                <h4>Crea un nuovo Post</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="submitForm" novalidate>
                    <div class="row">
                        <div class="col-6">
                            <div class="my-4">
                                <label for="title">Titolo</label>
                                <input type="text" class="form-control" id="title" name="title"
                                    v-model.trim="form.title" placeholder="Titolo del Post">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="my-4">
                                <label for="category">Categoria</label>
                                <select class="form-select" name="categoryId" v-model="form.categoryId">
                                    <option selected disabled>Seleziona categoria</option>
                                    <option v-for="category in categories" :key="category.id" :value="category.id">
                                        {{ category.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-4">
                                <label for="content">Descrizione</label>
                                <textarea class="form-control" name="content" v-model.trim="form.content"
                                    placeholder="Descrizione del Post..." id="content" rows="5"></textarea>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mb-4">
                                <label for="basic-url">URL Immagine</label>
                                <div class="input-group">
                                    <span class="input-group-text" id="basic-addon3">https://example.com</span>
                                    <input type="text" class="form-control" id="basic-url" name="image"
                                        v-model="form.image">
                                </div>

                            </div>
                        </div>
                        <div class="col-12">
                            <div class="d-flex gap-4 flex-wrap">
                                <div v-for="tag in tags" :key="tag.id" class="form-check">
                                    <input class="form-check-input" type="checkbox" :name="`tags[${tag.id}]`"
                                        :value="tag.id" :id="`tag-${tag.id}`" v-model="form.tags">
                                    <label class="form-check-label" :for="`tag-${tag.id}`">{{ tag.name }}</label>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 mt-3 d-flex justify-content-between align-items-center">
                            <button type="submit" class="btn btn-primary">Invia</button>
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="published"
                                    name="published" :value="true" v-model="form.published" checked>
                                <label class="form-check-label" for="published">Pubblicato</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
#form-section {
    display: flex;
    justify-content: center;
}
</style>