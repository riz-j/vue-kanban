<template>
  <div class="navigation v-card v-card--variant-elevated">
    <div>
      <!-- <p>Logo Placeholder</p> -->
    </div>
    <div class="d-flex align-center ga-4">
      <v-btn id="global-search-input">
        <p class="text-body-2">
          <v-icon>mdi-magnify</v-icon>
          Search 
        </p>
      </v-btn>
      <v-icon size="small">mdi-bell</v-icon>
      <v-icon size="small">mdi-help-circle</v-icon>
      <v-icon size="small">mdi-cog</v-icon>
    </div>
  </div>
  <slot></slot>
</template>
<script setup>

</script>
<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 0px 1.5rem;

  color: darkgray;
  background-color: #171616;
}

#global-search-input {
  display: flex;
  justify-content: start;
  align-items: center;
  height: 2rem;
  width: 200px;
  padding: 5px 10px;

  border: 1px solid darkgray;
  border-radius: 5px;
  color: darkgray;
  cursor: text;
}
</style>