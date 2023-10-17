import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {

}

const CreateFormRequest = createAction('CreateFormRequest');
const CreateFormSuccess = createAction('CreateFormSuccess');
const CreateFormFailure = createAction('CreateFormFailure');

const CreateProFormRequest = createAction('CreateProFormRequest');
const CreateProFormSuccess = createAction('CreateProFormSuccess');
const CreateProFormFailure = createAction('CreateProFormFailure');

const SavedFormRequest = createAction('SavedFormRequest');
const SavedFormSuccess = createAction('SavedFormSuccess');
const SavedFormFailure = createAction('SavedFormFailure');

const ViewFormRequest = createAction('ViewFormRequest');
const ViewFormSuccess = createAction('ViewFormSuccess');
const ViewFormFailure = createAction('ViewFormFailure');

const UpdateFormRequest = createAction('UpdateFormRequest');
const UpdateFormSuccess = createAction('UpdateFormSuccess');
const UpdateFormFailure = createAction('UpdateFormFailure');

const UpdateProFormRequest = createAction('UpdateProFormRequest');
const UpdateProFormSuccess = createAction('UpdateProFormSuccess');
const UpdateProFormFailure = createAction('UpdateProFormFailure');

const clearErrors = createAction('clearErrors');
const clearMessage = createAction('clearMessage');

export const FormReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(CreateFormRequest, (state) => {
        state.loading = true;
    })
    .addCase(CreateFormSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(CreateFormFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(CreateProFormRequest, (state) => {
        state.loading = true;
    })
    .addCase(CreateProFormSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(CreateProFormFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(SavedFormRequest, (state) => {
        state.loading = true;
    })
    .addCase(SavedFormSuccess, (state, action) => {
        state.loading = false;
        state.forms = action.payload;  
    })
    .addCase(SavedFormFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(ViewFormRequest, (state) => {
        state.loading = true;
    })
    .addCase(ViewFormSuccess, (state, action) => {
        state.loading = false;
        state.form = action.payload;  
    })
    .addCase(ViewFormFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
})

export const updateFormReducer = createReducer(initialState, (builder) => {

    builder
    .addCase(UpdateFormRequest, (state) => {
        state.loading = true;
    })
    .addCase(UpdateFormSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(UpdateFormFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(UpdateProFormRequest, (state) => {
        state.loading = true;
    })
    .addCase(UpdateProFormSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(UpdateProFormFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
})
