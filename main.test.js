import { visualDiff } from '@web/test-runner-visual-regression';
import {render} from './main'

describe('main', () => {
  it('should render', async () => {
    const $app = document.querySelector('#app')
    render()
    await visualDiff($app, 'main.app');
  })
})
