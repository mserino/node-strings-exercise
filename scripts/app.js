const appModule = {
  manipulateStrings: (strings) => {
    let result;

    strings.forEach((element, index, array) => {
      const found = array.find((el, i) => {
        if (i !== index) {
          return el.split('').sort().join('') === element.split('').sort().join('');
        }
      });

      if (found) result = `${found},${element}`;
    });
    
    return result ? result : '';
  }
}

const app = module.exports = appModule;