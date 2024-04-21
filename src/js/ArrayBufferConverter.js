function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
  }
  
  class ArrayBufferConverter {
    constructor() {
      this.loadedBuffer = null;
    }
  
    load(buffer) {
      this.loadedBuffer = buffer;
    }
  
    toString() {
      if (!this.loadedBuffer) {
        throw new Error('No buffer loaded. Call load(buffer) first.');
      }
  
      const bufferView = new Uint16Array(this.loadedBuffer);
      let result = '';
      for (let i = 0; i < bufferView.length; i++) {
        result += String.fromCharCode(bufferView[i]);
      }
      return result;
    }
  }
  
  
  module.exports = { ArrayBufferConverter };