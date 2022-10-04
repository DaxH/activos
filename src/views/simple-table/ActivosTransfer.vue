<template>
  <div>
    <v-card>
      <v-col cols="12">
        <v-card>
          <v-card-title>Transferencia de activos </v-card-title>
          <demo-simple-table-basic></demo-simple-table-basic>
        </v-card>
      </v-col>
      <br />
      <v-row style="margin: 0px">
        <v-col cols="5.5">
          <v-select :items="['Dario', 'Fabricio', 'Leon', 'Daniel ']" label="Empleado">
            <template v-slot:item="{ item, attrs, on }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
              </v-list-item>
            </template>
          </v-select>
          <br />
          <v-card class="mx-auto" min-height="100%" min-width="40%">
            <v-list>
              <v-list-item-group v-model="model" multiple>
                <template v-for="(item, i) in left">
                  <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>
                  <v-list-item
                    @click="transferir(1, item.id)"
                    v-else
                    :key="`item-${item.id}`"
                    active-class="deep-purple--text text--accent-5"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-checkbox success :value="active" color="deep-purple accent-4"></v-checkbox>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="1">
          <h3>a:</h3>
          <br />
          <br />
          <v-btn
            @click="leftToRight"
            class="my-2"
            style="margin: auto"
            color="primary"
            depressed
            elevation="10"
            icon
            plain
            x-large
          >
            <v-icon>{{ icons.mdiArrowRightBold }}</v-icon>
          </v-btn>
          <br />
          <v-btn
            @click="rightToLeft"
            class="my-2"
            style="margin: auto"
            color="primary"
            depressed
            elevation="10"
            icon
            plain
            x-large
          >
            <v-icon>{{ icons.mdiArrowLeftBold }}</v-icon>
          </v-btn>
        </v-col>
        <v-col cols="5.5">
          <v-select :items="['Dario', 'Fabricio', 'Leon', 'Daniel ']" label="Empleado">
            <template v-slot:item="{ item, attrs, on }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-title :id="attrs['aria-labelledby']" v-text="item"></v-list-item-title>
              </v-list-item>
            </template>
          </v-select>

          <v-card class="mx-auto" min-height="100%" min-width="40%">
            <v-list>
              <v-list-item-group v-model="model" multiple>
                <template v-for="(item, i) in right">
                  <v-divider v-if="!item" :key="`divider-${i}`"></v-divider>
                  <v-list-item
                    @click="transferir(2, item.id)"
                    v-else
                    :key="`item-${i}`"
                    :value="item"
                    active-class="deep-purple--text text--accent-5"
                  >
                    <template v-slot:default="{ active }">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.name"></v-list-item-title>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-checkbox success :value="active" color="deep-purple accent-4"></v-checkbox>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                  <v-radio-group>
                    <v-radio :key="0" :label="`normal`" :value="n"></v-radio>
                    <v-radio :key="1" :label="`optimo`" :value="n"></v-radio>
                    <v-radio :key="2" :label="`deteriorado`" :value="n"></v-radio>
                  </v-radio-group>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-btn style="margin-top: 5vw; margin-bottom: 1vw" color="primary" depressed elevation="10" x-large
          >Transferir</v-btn
        >
      </div>
    </v-card>
  </div>
</template>

<script>
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
  mdiArrowRightBold,
  mdiArrowLeftBold,
} from '@mdi/js'
import data from './datatable-data'
import Icons from '../icons/Icons.vue'
export default {
  components: { Icons, TableInfoActivo, TableDes, TableMan },
  methods: {
    rightToLeft() {
      var globals = this
      this.right.forEach(function (comida) {
        if (comida.value) {
          globals.right = globals.right.filter(item => item.id !== comida.id)
          comida.value = false
          globals.left.push(comida)
        }
      })
    },

    leftToRight() {
      var globals = this
      this.left.forEach(function (comida) {
        if (comida.value) {
          globals.left = globals.left.filter(item => item.id !== comida.id)
          comida.value = false
          globals.right.push(comida)
        }
      })
    },
    transferir(id, value) {
      if (id == 1) {
        this.left.find(element => {
          element.id == value ? (element.value = !element.value) : null
        })
      } else {
        this.right.find(element => {
          element.id == value ? (element.value = !element.value) : null
        })
      }
    },
  },
  data() {
    return {
      items: ['foo', 'bar', 'fizz', 'buzz'],
      value: ['foo', 'bar', 'fizz', 'buzz'],
      selectedKeys: ['1', '4'],
      tapOption: false,
      right: [],
      left: [
        { id: 0, name: 'computadora Dell', value: false },
        { id: 1, name: 'silla ergonommica', value: false },
        { id: 2, name: 'Monitor Acer', value: false },
        { id: 3, name: 'Servidor Unix', value: false },
        { id: 4, name: 'Licencia', value: false },
        { id: 5, name: 'Computadora 123', value: false },
      ],
      model: ['Carrots'],

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
        mdiArrowRightBold,
        mdiArrowLeftBold,
      },
    }
  },
}
</script>
