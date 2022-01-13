(()=>{
  window.addEventListener("load", ()=>{
    window. eruda.init( );
//    const model = window.initModel()
  });
  window.initModel = ()=>{
    console.log("loading initModel()"); // LOL
    
    const model = tf.sequential({
      layers: [ // layers layers layers layers 
        tf.layers.dense({inputShape: [784], units: 32, activation: 'relu'}),
        tf.layers.dense({units: 10, activation: 'sigmoid'}),
      ]
    });
    
    model.weights.forEach(w => { // blah blah blah...
      console.log(w.name, w.shape);
    });
    
    model.compile({ // IDK WTF this is .... whatever....
      optimizer: 'sgd',
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy']
    });
    
    return model;
  }; 
})();