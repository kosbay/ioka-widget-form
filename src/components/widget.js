import zoid from 'zoid'

(function(W) {
  W.initPayment = ({
    elementId,
    src,
    onResponse = (res) => console.log("think", res)
  }) => {
    W.initZoid = zoid.create({
      tag: 'custom-iframe-loader',
      url: src,
      dimensions: {
        height: '100%',
        width: '100%'
      },
    })
    
    const element = `#${elementId}`
    const options = {
      alternateText: ', are you kidding me? Am I joke to you?',
      justText: "some text",
      handleFunction: (response) => {
        console.log("zoid local function 2", response)
        onResponse(response)
      }
    }
    
    initZoid(options).render(element)
  }
  
})(window);