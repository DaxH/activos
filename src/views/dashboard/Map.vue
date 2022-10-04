<template>
  <div>
    <span class="font-weight-semibold">Ubicaciones registradas</span>

    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" @click="eventMarket(m)" />
    </GmapMap>
    <!--

  
      <h2>Search and add a pin</h2>
      <GmapAutocomplete @place_changed="setPlace" />
      <button @click="addMarker">Add</button>
      -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="text-h5">
          {{ dataModalMap.name }}
        </v-card-title>
        <div class="text-center">
          <v-avatar size="120">
            <v-img :src="dataModalMap.icon" max-height="500px" max-width="150px" alt="logo"></v-img>
          </v-avatar>
        </div>
        <v-col cols="12" md="12">
          <v-card-text md="2">
            <div
              v-for="(earning, index) in dataModalMap.totalEarning"
              :key="earning.avatar"
              :class="`d-flex align-start ${index > 0 ? 'mt-8' : ''}`"
            >
              <v-avatar rounded size="38" color="#5e56690a" class="me-4">
                <v-img contain :src="earning.avatar" height="20"></v-img>
              </v-avatar>

              <div class="d-flex align-center flex-grow-1 flex-wrap">
                <div>
                  <h4 class="font-weight-medium">
                    {{ earning.title }}
                  </h4>
                  <span class="text-xs text-no-wrap">{{ earning.subtitle }}</span>
                </div>

                <v-spacer></v-spacer>

                <div class="ms-1">
                  <p class="text--primary font-weight-medium mb-1">
                    {{ earning.earning }}
                  </p>
                  <v-progress-linear :value="earning.progress" :color="earning.color"></v-progress-linear>
                </div>
              </div>
            </div>
          </v-card-text>
        </v-col>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="#FF5015" text @click="dialog = false"> Salir </v-btn>

          <v-btn color="#6AFF15" text :to="{ name: 'listActivos' }"> Ver Oficina </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import officeIcon from '@/assets/images/logos/office.png'
import cajeroIcon from '@/assets/images/logos/cajero.png'
export default {
  name: 'GoogleMap',
  data() {
    const totalEarning = [
      {
        avatar: require('@/assets/images/logos/empleado.png'),
        title: 'Empleados',
        subtitle: 'Descripción',
        earning: '$24,895.65',
        progress: '80',
        color: 'primary',
      },
      {
        avatar: require('@/assets/images/logos/bitbank.png'),
        title: 'N. Activos',
        subtitle: 'Descripción',
        earning: '$8,6500.20',
        progress: '65',
        color: 'info',
      },
      {
        avatar: require('@/assets/images/logos/money.png'),
        title: 'Valor en Activos',
        subtitle: 'Descripción',
        earning: '$10,2450.80',
        progress: '30',
        color: 'secondary',
      },
    ]
    return {
      totalEarning,
      icons: {
        iconOff: officeIcon,
        iconCaje: cajeroIcon,
      },
      dialog: false,
      dataModalMap: {
        id: 1,
        name: 'Cajero',
        icon: cajeroIcon,
        position: {
          lat: -4.000287468246733,
          lng: -79.20177423154057,
        },
        totalEarning: [
          {
            avatar: require('@/assets/images/logos/empleado.png'),
            title: 'Empleados',
            subtitle: 'Descripción',
            earning: '$24,895.65',
            progress: '80',
            color: 'primary',
          },
          {
            avatar: require('@/assets/images/logos/bitbank.png'),
            title: 'N. Activos',
            subtitle: 'Descripción',
            earning: '$8,6500.20',
            progress: '65',
            color: 'info',
          },
          {
            avatar: require('@/assets/images/logos/money.png'),
            title: 'Valor en Activos',
            subtitle: 'Descripción',
            earning: '$10,2450.80',
            progress: '30',
            color: 'secondary',
          },
        ],
      },
      center: { lat: 39.7837304, lng: -100.4458825 },
      currentPlace: null,
      markers: [
        {
          id: 1,
          name: 'Cajero',
          icon: cajeroIcon,
          position: {
            lat: -4.000287468246733,
            lng: -79.20177423154057,
          },
          totalEarning: [
            {
              avatar: require('@/assets/images/logos/empleado.png'),
              title: 'Empleados',
              subtitle: 'Descripción',
              earning: '300',
              progress: '80',
              color: 'primary',
            },
            {
              avatar: require('@/assets/images/logos/bitbank.png'),
              title: 'N. Activos',
              subtitle: 'Descripción',
              earning: '6000',
              progress: '65',
              color: 'info',
            },
            {
              avatar: require('@/assets/images/logos/money.png'),
              title: 'Valor en Activos',
              subtitle: 'Descripción',
              earning: '$2450.80',
              progress: '30',
              color: 'secondary',
            },
          ],
        },
        {
          id: 2,
          name: 'Oficina Norte',
          icon: officeIcon,
          position: {
            lat: -3.966516546351609,
            lng: -79.20669780614186,
          },
          totalEarning: [
            {
              avatar: require('@/assets/images/logos/empleado.png'),
              title: 'Empleados',
              subtitle: 'Descripción',
              earning: '300',
              progress: '80',
              color: 'primary',
            },
            {
              avatar: require('@/assets/images/logos/bitbank.png'),
              title: 'N. Activos',
              subtitle: 'Descripción',
              earning: '6000',
              progress: '65',
              color: 'info',
            },
            {
              avatar: require('@/assets/images/logos/money.png'),
              title: 'Valor en Activos',
              subtitle: 'Descripción',
              earning: '$2450.80',
              progress: '30',
              color: 'secondary',
            },
          ],
        },
        {
          id: 3,
          name: 'Oficina Sur',
          icon: officeIcon,
          position: {
            lat: -4.0121965774380985,
            lng: -79.2056626260474,
          },
          totalEarning: [
            {
              avatar: require('@/assets/images/logos/empleado.png'),
              title: 'Empleados',
              subtitle: 'Descripción',
              earning: '300',
              progress: '80',
              color: 'primary',
            },
            {
              avatar: require('@/assets/images/logos/bitbank.png'),
              title: 'N. Activos',
              subtitle: 'Descripción',
              earning: '6000',
              progress: '65',
              color: 'info',
            },
            {
              avatar: require('@/assets/images/logos/money.png'),
              title: 'Valor en Activos',
              subtitle: 'Descripción',
              earning: '$2450.80',
              progress: '30',
              color: 'secondary',
            },
          ],
        },
      ],
      places: [],
    }
  },
  mounted() {
    this.geolocate()
  },
  methods: {
    eventMarket(a) {
      this.dialog = true
      this.dataModalMap = a
      console.log('evento click ', a)
    },
    addMarker() {
      const marker = {
        lat: 39.7837304,
        lng: -100.4458825,
      }
      this.markers.push({ position: marker })
      console.log('se realiza el add marker', this.markers)
      if (this.currentPlace) {
        /*const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        }*/
        const marker = {
          lat: 39.7837304,
          lng: -100.4458825,
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      })
      //this.center = { lat: 39.7837304, lng: -100.4458825 }
    },
  },
}
</script>
