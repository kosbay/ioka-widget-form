import zoid from 'zoid'

(function(W) {
  const _tagName = "custom-iframe-loader";
  W.IokaWidget = class IokaWidget {
    constructor({ src, elementId, options }) {
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
      this.frameInit(this.options).render(this.element)
    }
  }

})(window);