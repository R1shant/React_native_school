// NounsLogic.js

export default NounsLogic = () => {

  const createNoun = () => {
    return ['create', 'Noun'];
  };

  const readNoun = (id, nouns) => {
    const foundObject = nouns.find((obj) => obj.id === id);
    return foundObject;
  };

  const updateNoun = (id, nouns, updatedNoun) => {
    const updatedNouns = nouns.map(noun => {
      if (noun.id === id) {
        return { ...noun, ...updatedNoun };
      }
      return noun;
    });
    return updatedNouns;
  };

  const deleteNoun = (nouns, id) => {
    return nouns.filter(noun => noun.id !== id);
  };

  const listNouns = () => {
    console.log('listNouns', nouns);
    return nouns;
  };

  return {
    createNoun,
    readNoun,
    updateNoun,
    deleteNoun,
    listNouns,
  };
};