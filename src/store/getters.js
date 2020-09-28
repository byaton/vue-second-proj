export default {
  animalsCount: (state) => state.cats.length + state.dogs.length,
  getAllCats: state => state.pets.filter(p => p.species === 'cat'),
  getAllDogs: state => state.pets.filter(p => p.species === 'dog')
}
