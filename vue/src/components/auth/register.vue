<template>
    <div class="home">
        <form>
            <div
                v-if="errors"
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
                style="font-size: 15px"
            >
                {{ errors
                }}<button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                ></button>
            </div>
            <v-row style="flex-direction: column">
                <v-col cols="12" md="12">
                    <v-text-field
                        v-model="name"
                        :rules="textRules"
                        label="name"
                        type="text"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        type="email"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        type="password"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                    <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password confirmation"
                        type="password"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <button
                type="submit"
                class="btn btn-primary"
                @click="register"
                style="color: white"
            >
                Register
            </button>
            <router-link to="/" class="ml-2"
                >Already have an account
            </router-link>
        </form>
    </div>
</template>

<script>
export default {};
</script>

<style>
.home {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgb(2, 0, 36);
    background: -moz-linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 121, 1) 35%,
        rgba(0, 212, 255, 1) 100%
    );
    background: -webkit-linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 121, 1) 35%,
        rgba(0, 212, 255, 1) 100%
    );
    background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 121, 1) 35%,
        rgba(0, 212, 255, 1) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#00d4ff",GradientType=1);
}
.home form {
    padding: 20px;
    text-align: initial;
    width: 400px;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #00000026;
}
</style>
