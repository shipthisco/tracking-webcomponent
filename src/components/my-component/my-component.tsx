import { Component, State } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @State() value: string;
  @State() data: Array<any>;


  handleSubmit(e:any) {
    e.preventDefault()
    console.log(this.value);
    // send data to our backend 
    fetch('https://api.github.com/users/ErvinLlojku')
    .then((response: Response) => response.json())
    .then(response => {
      this.data = response;
      console.log(this.data);
    });
  }

  handleChange(event:any) {
    this.value = event.target.value;
  }

  render() {
    return (
      <div>
          <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Enter Tracking Number:
            <input type="text" value={this.value} onInput={(event) => this.handleChange(event)} />
          </label>
          <input type="submit" value="Submit" />
          </form>
        <div>
          Hi!
          {this.data['']}
        </div>
      </div>
    );
  }
}
