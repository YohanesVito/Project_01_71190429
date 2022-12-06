<template>
  <div class="checkout">
    <h2 id="pesanan">Pesanan Anda</h2>
    <table border="0px">
      <tr>
        <td>
          <img src="../assets/gigaMac.png" alt="" />
          <h2>GigaMac</h2>
        </td>
        <td id="catatan">
          <p>Catatan:</p>
          <p>Pedas</p>
          <p>Ekstra Kentang</p>
        </td>
        <td>&nbsp;</td>
        <td><h3>Rp 80.000</h3></td>
      </tr>
      <tr>
        <td>
          <img src="../assets/iceCream.png" alt="" />
          <h2>Monday Ice Cream</h2>
        </td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td><h3>Rp 12.000</h3> </td>
      </tr>
    </table>
    <h2>Total Pesanan Anda Rp 92.000</h2>
  </div>
</template>
<style>
.checkout table {
  margin-top: 50px;
  margin-left: 250px;
  text-align: center;
}

.checkout ul {
  text-decoration: none;
  list-style-type: none;
  padding-left: none;
}

.checkout img {
  width: 250px;
  height: 200px;
}

#catatan{
  text-align: left;
}



</style>