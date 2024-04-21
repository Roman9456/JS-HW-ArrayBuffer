const { ArrayBufferConverter } = require('../ArrayBufferConverter');
// Определяем тесты для класса ArrayBufferConverter
describe('ArrayBufferConverter', () => {
    let converter;
  
    beforeEach(() => {
      converter = new ArrayBufferConverter();
    });
  
    // Тестирование загрузки данных в объект ArrayBufferConverter
    test('load() should set loadedBuffer property with provided buffer', () => {
      const buffer = new ArrayBuffer(16);
      converter.load(buffer);
  
      expect(converter.loadedBuffer).toBe(buffer);
    });
  
    // Тестирование преобразования ArrayBuffer в строку
    test('toString() should convert loadedBuffer to a string', () => {
      const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
      const buffer = (input => {
        const buffer = new ArrayBuffer(data.length * 2);
        const bufferView = new Uint16Array(buffer);
        for (let i = 0; i < input.length; i++) {
          bufferView[i] = input.charCodeAt(i);
        }
        return buffer;
      })(data);
  
      converter.load(buffer);
      const jsonString = converter.toString();
  
      const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
      expect(jsonString).toBe(expectedString);
    });
  
    // Тестирование выбрасывания ошибки при вызове toString() без загруженного буфера
    test('toString() should throw an error if no buffer is loaded', () => {
      expect(() => {
        converter.toString();
      }).toThrow('No buffer loaded. Call load(buffer) first.');
    });
  });