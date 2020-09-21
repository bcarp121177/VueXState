<template>
  <div class="hello">
    <p>{{projectsList}}</p>
    
  </div>
</template>

<script>
import { store, getters, mutations } from "@/store";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  beforeMount() {
    this.commitProjectToImport({
      id: 0,
      path: "/a/b/c",
      status: "Ready to Import"
    });
    this.commitProjectToImport({
      id: 0,
      path: "/e/f/g",
      status: "Ready to Import"
    });
  },
  methods: {
    ...mutations
  },
  computed: {
    projectsList() {
      return store.projectsToImport;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
