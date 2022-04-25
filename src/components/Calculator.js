class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='calculator'>
        <div className='calculator-header'>
          <p>0</p>
        </div>
        <div className='calculator-buttons'>
          <button type='button' className='btn btn--gray'>
            AC
          </button>
          <button type='button' className='btn btn--gray'>
            +/-
          </button>
          <button type='button' className='btn btn--gray'>
            %
          </button>
          <button type='button' className='btn btn--gray'>
            &#247;
          </button>

          <button type='button' className='btn btn--gray'>
            7
          </button>
          <button type='button' className='btn btn--gray'>
            8
          </button>
          <button type='button' className='btn btn--gray'>
            9
          </button>
          <button type='button' className='btn btn--gray'>
            x
          </button>

          <button type='button' className='btn btn--gray'>
            4
          </button>
          <button type='button' className='btn btn--gray'>
            5
          </button>
          <button type='button' className='btn btn--gray'>
            6
          </button>
          <button type='button' className='btn btn--gray'>
            -
          </button>

          <button type='button' className='btn btn--gray'>
            1
          </button>
          <button type='button' className='btn btn--gray'>
            2
          </button>
          <button type='button' className='btn btn--gray'>
            3
          </button>
          <button type='button' className='btn btn--gray'>
            +
          </button>

          <button type='button' className='btn btn--gray'>
            0
          </button>
          <button type='button' className='btn btn--gray'>
            .
          </button>
          <button type='button' className='btn btn--gray'>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
