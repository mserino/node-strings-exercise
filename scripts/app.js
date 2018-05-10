const appModule = {
  manipulateStrings: (strings) => {
    let result = [];

    strings.forEach((element, index, array) => {
      const found = array.find((el, i) => {
        if (i !== index) {
          return el.split('').sort().join('') === element.split('').sort().join('');
        }
      });

      if (found) {
        if (result.indexOf(found) === -1) result.push(found);
        if (result.indexOf(element) === -1) result.push(element);
      }
    });
    
    return result.length > 0 ? result : '';
  }
}

const app = module.exports = appModule;