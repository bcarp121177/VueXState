import Vue from 'vue'

export const store = Vue.observable({
  projectsToImport: []
});

export const allchecked = Vue.observable({
  isAllChecked: false
});

export const mutations = {
  setIsNavOpen(yesno) {
    store.isNavOpen = yesno;
  },
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  },
  toggleAllChecked(){
    allchecked.isAllChecked = !allchecked.isAllChecked
  },
  setRefreshData(val){
    store.refreshData = val
  },
  resetRefreshData() {
    store.refreshData = !store.refreshData
  },
  commitProjectToImport(obj) {
    store.projectsToImport.push(obj)
  },
  updateProjectItemImportStatus(path, status){
    for(var i=0; i < store.projectsToImport.length; i++) {
      if(store.projectsToImport[i].path == path) {
        store.projectsToImport[i].status = status
      }
    }
  }
}

export const getters = {
    status: (id) => store.projectsToImport[id].status
}
