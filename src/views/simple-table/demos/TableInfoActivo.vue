<template>
  <v-simple-table>
    <template v-slot:default>
      <tbody>
        <tr>
          <th class="text-uppercase">Nombre</th>
          <td class="text-center">
            {{ desserts.name }}
          </td>
        </tr>
        <tr>
          <th class="text-uppercase">Id</th>
          <td class="text-center">
            {{ desserts.id }}
          </td>
        </tr>
        <tr>
          <th class="text-uppercase">Descripción</th>
          <td>
            {{ desserts.description }}
          </td>
        </tr>
        <tr>
          <th class="text-uppercase">Fecha de ingreso</th>
          <td class="text-center">
            {{ desserts.date }}
          </td>
        </tr>
        <tr>
          <th class="text-uppercase">Valor Histórico</th>
          <td class="text-center">
            {{ desserts.history }}
          </td>
        </tr>
        <tr>
          <th class="text-uppercase">Valor Actual</th>
          <td class="text-center">
            {{ desserts.actuality }}
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
      name: 'Mueble',
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
