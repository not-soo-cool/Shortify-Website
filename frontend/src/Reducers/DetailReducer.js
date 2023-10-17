import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {

}

const CreateDetailRequest = createAction('CreateDetailRequest');
const CreateDetailSuccess = createAction('CreateDetailSuccess');
const CreateDetailFailure = createAction('CreateDetailFailure');

const CreateProDetailRequest = createAction('CreateProDetailRequest');
const CreateProDetailSuccess = createAction('CreateProDetailSuccess');
const CreateProDetailFailure = createAction('CreateProDetailFailure');

const SavedDetailRequest = createAction('SavedDetailRequest');
const SavedDetailSuccess = createAction('SavedDetailSuccess');
const SavedDetailFailure = createAction('SavedDetailFailure');

const ViewDetailRequest = createAction('ViewDetailRequest');
const ViewDetailSuccess = createAction('ViewDetailSuccess');
const ViewDetailFailure = createAction('ViewDetailFailure');

const UpdateDetailRequest = createAction('UpdateDetailRequest');
const UpdateDetailSuccess = createAction('UpdateDetailSuccess');
const UpdateDetailFailure = createAction('UpdateDetailFailure');

const UpdateProDetailRequest = createAction('UpdateProDetailRequest');
const UpdateProDetailSuccess = createAction('UpdateProDetailSuccess');
const UpdateProDetailFailure = createAction('UpdateProDetailFailure');

const clearErrors = createAction('clearErrors');
const clearMessage = createAction('clearMessage');

export const DetailRedcuer = createReducer(initialState, (builder) => {

    builder
    .addCase(CreateDetailRequest, (state) => {
        state.loading = true;
    })
    .addCase(CreateDetailSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(CreateDetailFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(CreateProDetailRequest, (state) => {
        state.loading = true;
    })
    .addCase(CreateProDetailSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(CreateProDetailFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(SavedDetailRequest, (state) => {
        state.loading = true;
    })
    .addCase(SavedDetailSuccess, (state, action) => {
        state.loading = false;
        state.details = action.payload;  
    })
    .addCase(SavedDetailFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(ViewDetailRequest, (state) => {
        state.loading = true;
    })
    .addCase(ViewDetailSuccess, (state, action) => {
        state.loading = false;
        state.detail = action.payload;  
    })
    .addCase(ViewDetailFailure, (state, action) => {
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

export const updateDetailRedcuer = createReducer(initialState, (builder) => {

    builder
    .addCase(UpdateDetailRequest, (state) => {
        state.loading = true;
    })
    .addCase(UpdateDetailSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(UpdateDetailFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(UpdateProDetailRequest, (state) => {
        state.loading = true;
    })
    .addCase(UpdateProDetailSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(UpdateProDetailFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
})
