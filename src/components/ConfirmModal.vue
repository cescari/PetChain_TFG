<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">{{ msgTitle }}</slot>
        </div>
        <div class="p-3" style="display: block; margin: auto; text-align: center;">
          <img src="../../public/img/error.png" alt="Error" style="width: 8%;" />
        </div>
        <div class="modal-body">
          <form name="petIdFrm" @submit.prevent="onSubmit">
            <slot name="body">{{ msgBody }}</slot>
          </form>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="btn btn-primary" @click="$emit('close')">Cerrar</button>
            <button
              type="submmit"
              class="btn btn-primary"
              @click="$emit('setConfirm');"
            >{{ msgBtnConfirm }}</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      petId: null,
      msgTitle: msgTitle,
      msgBody: msgBody,
      msgBtnConfirm: msgBtnConfirm
    };
  },
  props: ["msgBody", "msgTitle", "msgBtnConfirm"]
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 5px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header {
  background-color: #007bff;
  color: #fff;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 5px 0;
  padding: 0.5rem !important;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

