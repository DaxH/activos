<template>
  <v-row>
    <v-col>
      <v-row justify="left">
        <v-dialog v-model="modalNewAlert" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on"> Crear Alerta </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">Alerta</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['Wilson', 'Daniel', 'Dario', 'Jonathan']"
                      label="Destinatario"
                      required
                      multiple
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['sin clasificación', 'garantías técnicas', 'mantenimiento programado']"
                      label="Tipo Alerta"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-radio-group v-model="radios">
                      <template v-slot:label>
                        <div>Tiempo de <strong>alerta</strong></div>
                      </template>
                      <v-radio value="Google">
                        <template v-slot:label>
                          <div><strong class="success--text">Periódica</strong></div>
                        </template>
                      </v-radio>
                      <v-radio value="Duckduckgo">
                        <template v-slot:label>
                          <div><strong class="primary--text">Una sola vez</strong></div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="date"
                          label="Seleccionar fecha de alerta"
                          :prepend-icon="mdiCalendarClock"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
                        <v-btn text color="primary" @click="$refs.dialog.save(date)"> OK </v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-autocomplete
                      :items="[
                        'Silla Ergonómica',
                        'Monitor Acer ',
                        'Teléfono',
                        'Servidor Unix',
                        'Licencia',
                        'Computadora 123',
                      ]"
                      label="Activos ligados"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                  <v-col sm="12">
                    <v-file-input
                      v-model="files"
                      placeholder="Upload your documents"
                      label="Archivo adjunto"
                      multiple
                      :append-icon="mdiPaperclipPlus"
                    >
                      <template v-slot:selection="{ text }">
                        <v-chip small label color="primary">
                          {{ text }}
                        </v-chip>
                      </template>
                    </v-file-input>
                  </v-col>
                  <v-col sm="12">
                    <v-textarea label="Descripción" hint="Motivo de la altera" persistent-hint required></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-combobox v-model="select" :items="items" label="Notificar mediante:" multiple chips>
                      <template v-slot:selection="data">
                        <v-chip
                          :key="JSON.stringify(data.item)"
                          v-bind="data.attrs"
                          :input-value="data.selected"
                          :disabled="data.disabled"
                          @click:close="data.parent.selectItem(data.item)"
                        >
                          <v-avatar class="accent white--text" left v-text="data.item.slice(0, 1).toUpperCase()">
                          </v-avatar>
                          {{ data.item }}
                        </v-chip>
                      </template>
                    </v-combobox>
                  </v-col>
                </v-row>
              </v-container>
              <!--<small>*indicates required field</small> -->
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#ca023b" text @click="modalNewAlert = false"> Cancelar </v-btn>
              <v-btn
                color="#00d6c0"
                text
                @click="
                  {
                    modalNewAlert = false
                    snackbar = true
                  }
                "
              >
                Emitir
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-col>
    <v-col cols="12">
      <dashboard-datatable></dashboard-datatable>
    </v-col>
    <v-snackbar min-width="30px" :timeout="2000" v-model="snackbar" absolute bottom color="success" outlined right>
      Alerta emitida con <strong>¡Éxito! </strong>
    </v-snackbar>
  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiPoll, mdiLabelVariantOutline, mdiCurrencyUsd, mdiHelpCircleOutline } from '@mdi/js'
import StatisticsCardVertical from '@/components/statistics-card/StatisticsCardVertical.vue'
import { mdiCalendarClock } from '@mdi/js'
// demos
import DashboardDatatable from '../dashboard/DashboardDatatable.vue'

export default {
  components: {
    StatisticsCardVertical,
    DashboardDatatable,
  },
  data() {
    const totalProfit = {
      statTitle: 'Total Profit',
      icon: mdiPoll,
      color: 'success',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%',
    }

    const totalSales = {
      statTitle: 'Refunds',
      icon: mdiCurrencyUsd,
      color: 'secondary',
      subtitle: 'Past Month',
      statistics: '$78',
      change: '-15%',
    }

    // vertical card options
    const newProject = {
      statTitle: 'New Project',
      icon: mdiLabelVariantOutline,
      color: 'primary',
      subtitle: 'Yearly Project',
      statistics: '862',
      change: '-18%',
    }

    const salesQueries = {
      statTitle: 'Sales Quries',
      icon: mdiHelpCircleOutline,
      color: 'warning',
      subtitle: 'Last week',
      statistics: '15',
      change: '-18%',
    }

    return {
      files: [],
      mdiCalendarClock: mdiCalendarClock,
      modalNewAlert: false,
      snackbar: false,
      totalProfit,
      totalSales,
      newProject,
      salesQueries,
      switch1: true,
      select: ['Correo', 'Celular'],
      items: ['Correo', 'Celular'],
    }
  },
}
</script>
