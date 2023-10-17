import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {

}

const LoginRequest = createAction('LoginRequest');
const LoginSuccess = createAction('LoginSuccess');
const LoginFailure = createAction('LoginFailure');

const RegisterRequest = createAction('RegisterRequest');
const RegisterSuccess = createAction('RegisterSuccess');
const RegisterFailure = createAction('RegisterFailure');

const LoadUserRequest = createAction('LoadUserRequest');
const LoadUserSuccess = createAction('LoadUserSuccess');
const LoadUserFailure = createAction('LoadUserFailure');

const LogoutUserRequest = createAction('LogoutUserRequest');
const LogoutUserSuccess = createAction('LogoutUserSuccess');
const LogoutUserFailure = createAction('LogoutUserFailure');

const CreateFormRequest = createAction('CreateFormRequest');
const CreateFormSuccess = createAction('CreateFormSuccess');
const CreateFormFailure = createAction('CreateFormFailure');

const CreateFormProRequest = createAction('CreateFormProRequest');
const CreateFormProSuccess = createAction('CreateFormProSuccess');
const CreateFormProFailure = createAction('CreateFormProFailure');


const clearErrors = createAction('clearErrors');
const clearMessage = createAction('clearMessage');

export const userRedcuer = createReducer(initialState, (builder) => {

    builder
    .addCase(LoginRequest, (state) => {
        state.loading = true;
    })
    .addCase(LoginSuccess, (state, action) => {
        state.loading = false;
        state.user = action.payload;  
        state.isAuthenticated = true;
    })
    .addCase(LoginFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    })
    .addCase(RegisterRequest, (state) => {
        state.loading = true;
    })
    .addCase(RegisterSuccess, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    })
    .addCase(RegisterFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
        state.isAuthenticated = false;
    })
    .addCase(LoadUserRequest, (state) => {
        state.loading = true;
    })
    .addCase(LoadUserSuccess, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    })
    .addCase(LoadUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
        state.isAuthenticated = false;
    })
    .addCase(LogoutUserRequest, (state) => {
        state.loading = true;
    })
    .addCase(LogoutUserSuccess, (state) => {
        state.loading = false;
        state.user = null;  
        state.isAuthenticated = false;
    })
    .addCase(LogoutUserFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
    })
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
    .addCase(CreateFormProRequest, (state) => {
        state.loading = true;
    })
    .addCase(CreateFormProSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;  
    })
    .addCase(CreateFormProFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
        state.error = null;
    })

})