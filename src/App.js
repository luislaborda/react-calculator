import React from 'react';


function App() {
  return (
    <div className="">
      <div id="calculator">
        <div id="screen-container">
          <input id="screen" />
        </div>

        <div id="button-container">
          <div class="buttons">
            <span class="operator" id="cancel">C</span>
            <span class="operator">/</span>
            <span class="operator">x</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span class="operator">-</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span class="operator">+</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span class="operator" id="calc">=</span>
            <div class="l-row">
              <span id="zero">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
