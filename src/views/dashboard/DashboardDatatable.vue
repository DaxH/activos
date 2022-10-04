<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="usreList"
      item-key="full_name"
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <!-- name -->
      <template #[`item.full_name`]="{ item }">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </template>
      <template #[`item.salary`]="{ item }">
        {{ `${item.salary}` }}
      </template>
      <!-- status -->
      <template #[`item.status`]="{ item }">
        <v-chip small :color="statusColor[status[item.status]]" class="font-weight-medium">
          {{ status[item.status] }}
        </v-chip>
      </template>
      <template #[`item.city`]="{ item }">
        <v-dialog transition="dialog-bottom-transition" max-width="600">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-1" color="warning" v-bind="attrs" v-on="on" fab dark small>
              <v-icon size="25">{{ icons.mdiEyeOutline }}</v-icon>
            </v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-toolbar color="primary" dark>Historial de iteraciones</v-toolbar>
              <v-card-text>
                <v-timeline>
                  <v-timeline-item v-for="n in 3" :key="n" large>
                    <template v-slot:icon>
                      <v-avatar>
                        <img src="https://i.pravatar.cc/64" />
                      </v-avatar>
                    </template>
                    <template v-slot:opposite>
                      <span>24/11/2021</span>
                    </template>
                    <v-card class="elevation-2">
                      <v-card-title class="text-h5"> Descripción </v-card-title>
                      <v-card-text>Se atendio la alerta satisfactoriamente.</v-card-text>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog.value = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical, mdiEyeOutline } from '@mdi/js'

import data from './datatable-data'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Recibido: 'success',
      Resigned: 'error',
      Detalle: 'warning',
      Enviado: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      headers: [
        { text: 'DESTINATARIO', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'FECHA DE EMISIÓN', value: 'start_date' },
        { text: 'TIPO', value: 'salary' },
        { text: 'ESTADO', value: 'status' },
        { text: 'DETALLES', value: 'city' },
      ],
      usreList: data,
      status: {
        1: 'Current',
        2: 'Recibido',
        3: 'Detalle',
        4: 'Resigned',
        5: 'Enviado',
      },
      statusColor,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
        mdiEyeOutline,
      },
    }
  },
}
</script>
