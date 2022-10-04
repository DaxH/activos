<template>
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr>
          <th class="text-uppercase">Estado</th>
          <td>
            {{ desserts.state }}
          </td>
        </tr>
        <tr>
          <th class="text-uppercase">Responsable</th>
          <td>
            <div class="d-flex flex-column">
              <span class="d-block font-weight-semibold text--primary text-truncate">1104190820</span>
              <small>Dario Gonzalez</small>
            </div>
          </td>
        </tr>
        <tr>
          <th class="text-uppercase">Fecha de Próximo</th>
          <td>
            {{ desserts.date }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: ['data'],
  setup() {
    const desserts = {
      state: 'Nuevo de Paquete',
      id: 2518528284,
      description: 'Silla metálica sin brazos, fabricada en tubo redondo color plomo, forrada con corosil color negro',
      date: '09/27/2022',
      history: '$19586.23',
      actuality: '$19586.23',
      depreciation: '$19586.23',
    }
    return {
      desserts,
    }
  },
  beforeMount() {
    console.log('llegamos a imprimir los datos ', this.data)
  },
}
</script>
