<template>
    <v-layout justify-center align-center>
        <v-flex shrink>
            <img alt="Vue logo" src="../assets/logo.png">
            <p>Localisation added: {{$t('message')}}</p>
            <HelloWorld msg="Welcome in Vue Production App... now add project to git."/>
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

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
