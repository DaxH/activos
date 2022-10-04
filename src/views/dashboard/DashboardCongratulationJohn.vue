<template>
  <v-card class="greeting-card">
    <v-row class="ma-0 pa-0">
      <v-col cols="8">
        <v-card-title class="text-no-wrap pt-1 ps-2"> Bienvenido Wilson Valverde! </v-card-title>
        <v-card-subtitle class="text-no-wrap ps-2"> Ultimo acceso 29/9/2022 9:35 AM </v-card-subtitle>
        <v-card-subtitle class="text-no-wrap ps-2"> Administrador de Activos Fijos</v-card-subtitle>
        <v-card-text class="d-flex align-center mt-2 pb-2 ps-2">
          <div>
            <p class="text-lg font-weight-semibold primary--text mb-1">Mis activos Fijos : 1200</p>

            <v-btn small color="primary"> Ver Activos </v-btn>
          </div>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<style lang="scss" scoped>
.greeting-card {
  position: relative;
  .greeting-card-bg {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .greeting-card-trophy {
    position: absolute;
    bottom: 10%;
    right: 8%;
  }
}
// rtl
.v-application {
  &.v-application--is-rtl {
    .greeting-card-bg {
      right: initial;
      left: 0;
      transform: rotateY(180deg);
    }
    .greeting-card-trophy {
      left: 8%;
      right: initial;
    }
  }
}
</style>
