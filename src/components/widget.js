import zoid from 'zoid'

(function(W) {
  const _tagName = "custom-iframe-loader";
  W.IokaWidget = class IokaWidget {
    constructor({ src, elementId, options, publicKey }) {
      if(src === undefined) {
        throw new Error("src is undefined");
      }

      if(elementId === undefined) {
        throw new Error("elementId is undefined");
      }

      if(options === undefined) {
        throw new Error("options is undefined");
      }

      if(publicKey === undefined) {
        throw new Error("publicKey is undefined");
      }

      this.src = src;
      this.element = `#${elementId}`;
      this.options = options;
      this.frameInit = zoid.create({
        tag: _tagName,
        url: src,
        dimensions: {
          height: '100%',
          width: '100%'
        }
      })
    }

    initPayment() {
      this.frameInit(this.options).render(this.element);
    }
  }

})(window);