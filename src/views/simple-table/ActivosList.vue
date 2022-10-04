<template>
  <div>
    <v-card>
      <v-btn @click="openRegister" class="mt-5 ml-2" color="secondary" depressed elevation="2" rounded text>
        <v-icon color="primary" left dark>
          {{ icons.mdiPuzzleStar }}
        </v-icon>
        Nuevo Activo
      </v-btn>
      <v-col cols="12">
        <v-card>
          <v-card-title>Lista de activos </v-card-title>
          <demo-simple-table-basic></demo-simple-table-basic>
        </v-card>
      </v-col>
      <v-data-table
        :headers="headers"
        :items="usreList"
        item-key="full_name"
        class="table-rounded"
        hide-default-footer
        disable-sort
      >
        <template #[`item.salary`]="{ item }">
          {{ `$${item.salary}` }}
        </template>

        <template #[`item.full_name`]="{ item }">
          <div class="d-flex flex-column">
            <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
            <small>{{ item.post }}</small>
          </div>
        </template>
        <template #[`item.status`]="{ item }">
          <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div class="text-center">
                <v-btn class="mx-2" color="accent" v-bind="attrs" v-on="on" fab dark small>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon v-bind="attrs" v-on="on" size="25">{{ icons.mdiTable }}</v-icon>
                    </template>
                    <span>Opciones</span>
                  </v-tooltip>
                </v-btn>
              </div>
            </template>
            <v-list>
              <v-col>
                <v-list-item class="my-2">
                  <v-btn @click="tapOption = true" class="mx-1" color="primary" v-bind="attrs" v-on="on" fab dark small>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on" size="25">{{ icons.mdiEyeOutline }}</v-icon>
                      </template>
                      <span>Detalles</span>
                    </v-tooltip>
                  </v-btn>
                </v-list-item>
                <v-list-item class="my-2">
                  <v-btn class="mx-1" color="warning" v-bind="attrs" v-on="on" fab dark small>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on" size="25">{{ icons.mdiPencil }}</v-icon>
                      </template>
                      <span>Editar</span>
                    </v-tooltip>
                  </v-btn>
                </v-list-item>
                <v-list-item class="my-2">
                  <v-btn class="mx-1" color="error" v-bind="attrs" v-on="on" fab dark small>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on" size="25">{{ icons.mdiDeleteForeverOutline }}</v-icon>
                      </template>
                      <span>Eliminar</span>
                    </v-tooltip>
                  </v-btn>
                </v-list-item>
                <v-list-item class="my-2">
                  <v-btn class="mx-1" color="success" v-bind="attrs" v-on="on" fab dark small>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on" size="25">{{ icons.mdiFolderSwapOutline }}</v-icon>
                      </template>
                      <span>Transferir</span>
                    </v-tooltip>
                  </v-btn>
                </v-list-item>
              </v-col>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
    </v-card>
    <v-dialog
      style="background: #f4f5fa"
      v-model="tapOption"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card>
        <v-toolbar max-height="70" flat dark color="#20a2d8">
          <v-btn icon dark @click="tapOption = false">
            <v-icon color="white">{{ icons.mdiClose }}</v-icon>
          </v-btn>
          <v-toolbar-title style="color: white">Información y detalles del Activo</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark icon v-bind="attrs" v-on="on">
                <v-icon>{{ icons.mdiDotsVertical }}</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-col>
                <v-list-item class="my-2">
                  <v-btn @click="tapOption = true" class="mx-1" color="primary" v-bind="attrs" v-on="on" fab dark small>
                    <v-icon size="25">{{ icons.mdiEyeOutline }}</v-icon>
                  </v-btn>
                </v-list-item>
                <v-list-item class="my-2">
                  <v-btn class="mx-1" color="warning" v-bind="attrs" v-on="on" fab dark small>
                    <v-icon size="25">{{ icons.mdiPencil }}</v-icon>
                  </v-btn>
                </v-list-item>
                <v-list-item class="my-2">
                  <v-btn class="mx-1" color="error" v-bind="attrs" v-on="on" fab dark small>
                    <v-icon size="25">{{ icons.mdiDeleteForeverOutline }}</v-icon>
                  </v-btn>
                </v-list-item>
                <v-list-item class="my-2">
                  <v-btn class="mx-1" color="success" v-bind="attrs" v-on="on" fab dark small>
                    <v-icon size="25">{{ icons.mdiFolderSwapOutline }}</v-icon>
                  </v-btn>
                </v-list-item>
              </v-col>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-card-text style="background: #f4f5fa">
          <v-row>
            <v-col md="5">
              <br />
              <v-col style="background: white">
                <h2>Nombre</h2>
              </v-col>
              <br />
              <v-col style="background: white">
                <v-container style="max-height: 300px; display: contents">
                  <div class="d-flex flex-column justify-space-between align-center">
                    <v-img height="300" width="200" :src="require('@/assets/images/activos/archivador.png')"></v-img>
                  </div>
                </v-container>
              </v-col>
              <br />
              <v-col style="background: white">
                <h2>Tipo de activo</h2>
                <TableDes></TableDes>
              </v-col>
            </v-col>
            <v-col md="7">
              <br />
              <v-col style="background: white">
                <h2>Datos principales</h2>
                <TableInfoActivo></TableInfoActivo>
              </v-col>
              <br />
              <br />
              <v-col style="background: white">
                <h2>Mantenimiento</h2>
                <TableMan></TableMan>
              </v-col>
            </v-col>
          </v-row>
        </v-card-text>

        <div style="flex: 1 1 auto"></div>
      </v-card>
    </v-dialog>

    <NewActivo v-if="newActivo" @close="closeActivo"></NewActivo>
  </div>
</template>

<script>
import NewActivo from './ModalRegisterActivo.vue'
import TableInfoActivo from './demos/TableInfoActivo.vue'
import TableDes from './demos/TableDes.vue'
import TableMan from './demos/TableMan.vue'
import {
  mdiSquareEditOutline,
  mdiDotsVertical,
  mdiTable,
  mdiDeleteForeverOutline,
  mdiPencil,
  mdiFolderSwapOutline,
  mdiEyeOutline,
  mdiClose,
  mdiPuzzleStar,
} from '@mdi/js'
import data from './datatable-data'
import Icons from '../icons/Icons.vue'
export default {
  components: { Icons, TableInfoActivo, TableDes, TableMan, NewActivo },
  methods: {
    openRegister() {
      console.log('llegamos open ', this.newActivo)
      this.newActivo = true
    },
    closeActivo() {
      this.newActivo = false
    },
  },
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      tapOption: false,
      newActivo: false,
      items: [
        {
          title: 'Ver',
        },
        {
          title: 'Editar',
        },
        {
          title: 'Eliminar',
        },
        {
          title: 'Transferir',
        },
      ],
      headers: [
        { text: 'Código Barras', value: 'email' },
        { text: 'Descripción', value: 'start_date' },
        { text: 'V. Histórico', value: 'salary' },
        { text: 'V. Actual', value: 'salary' },
        { text: 'V. Deprecio', value: 'salary' },
        { text: 'Responsable', value: 'full_name' },
        { text: 'Fecha Ingreso', value: 'age' },
        { text: 'Acciones', value: 'status' },
      ],
      usreList: data,
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
        mdiTable,
        mdiPencil,
        mdiFolderSwapOutline,
        mdiDeleteForeverOutline,
        mdiEyeOutline,
        mdiClose,
        mdiPuzzleStar,
      },
    }
  },
}
</script>
