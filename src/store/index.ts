import createHashHistory from 'history/createHashHistory';
export default class Store {
  public state: { activeIndex: number; slideLength: number };
  history = createHashHistory();

  constructor(defaultState = { activeIndex: 0, slideLength: 0 }) {
    this.state = defaultState;
    this.checkSlide(this.history.location);
    this.history.listen(location => this.checkSlide(location));
  }

  public set(action: string, payload: any) {
    switch (action) {
      case 'NEXT':
        this.nextSlide(payload);
        break;
      case 'PREV':
        this.prevSlide(payload);
        break;
      case 'SET':
        this.setSlide(payload);
        break;
      default:
        console.log('not a valid action');
        break;
    }
  }

  public nextSlide(payload) {
    this.state = payload;
    this.history.push(`${this.state.activeIndex}`)
  }

  public prevSlide(payload) {
    this.state = payload;
    this.history.push(`${this.state.activeIndex}`)
  }

  public setSlide(payload){
    this.state = payload;
  }

  public checkSlide(location) {
    const urlHash = parseInt(location.pathname.replace('/', ''), 10);
    // debugger;
    if (isNaN(urlHash) || urlHash > this.state.slideLength - 1) {
      this.history.push('/0');
      const payload = { ...this.state, activeIndex: 0 };
      this.nextSlide(payload);
    } else {
      const payload = { ...this.state, activeIndex: urlHash };
      this.setSlide(payload);
    }
  }
}
