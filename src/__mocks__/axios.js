
import { postItems } from '../_data/posts';
export default {
  get: jest.fn(url => Promise.resolve({data: postItems }))
}