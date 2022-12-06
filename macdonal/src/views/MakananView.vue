<template>
  <div class="makanan">
    <table border="2px">
      <tr>
        <td>
          <router-link to="/detailmakanan">
            <div>
              <img src="../assets/gigaMac.png" />
              <h3>GigaMac</h3>
            </div>
          </router-link>
        </td>
        <td>
          <router-link to="/detailmakanan">
            <img src="../assets/chisBurger.png" />
            <h3>ChisBurger</h3>
          </router-link>
        </td>
        <td>
          <router-link to="/detailmakanan">
            <img src="../assets/macNaget.png" />
            <h3>MacNuget</h3>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
img {
  width: 200px;
  height: 200px;
}

.makanan {
  margin-left: 250px;
  margin-top: 30px;
}

table {
  border-collapse: collapse;
}
</style>