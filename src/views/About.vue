<template>
    <v-layout justify-center align-center>
        <v-flex shrink>
            <h1>This is an about page</h1>
            <v-btn
                    icon
                    large
                    :href="source"
                    target="_blank"
                    slot="activator"
            >
                <v-icon large>code</v-icon>
            </v-btn>
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </v-flex>
    </v-layout>
</template>
