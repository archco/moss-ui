import { mount } from '@vue/test-utils';
import SimpleCrud from '../../src/js/components/simple-crud.vue';

describe('#SimpleCrud', () => {
  const wrapper = mount(SimpleCrud, {
    slots: {
      read: [
        '<span class="content">Model Information</span>',
        `<span class="actions btn-group">
          <button id="change-to-update" type="button" class="btn" data-toggle="update">Edit</button>
          <button type="button" class="btn danger" data-toggle="delete">Delete</button>
        </span>`
      ],
      update: `
        <form slot="update" action="#" method="POST">
          <span class="content">Some inputs</span>
          <span class="actions btn-group">
            <button id="cancel" type="button" class="btn default" data-toggle="cancel">Cancel</button>
            <button type="submit" class="btn success">Edit</button>
          </span>
        </form>
      `,
      delete: `
        <form slot="delete" action="#" method="POST">
          <span class="content color-danger">
            <b>Are you sure?</b> Remove this model?
          </span>
          <span class="actions btn-group">
            <button type="submit" class="btn danger">Delete</button>
            <button type="button" class="btn default" data-toggle="cancel">Cancel</button>
          </span>
        </form>
      `
    }
  });

  it('mount.', () => {
    expect(wrapper.element.matches('li.simple-crud-item')).toBe(true);
    expect(wrapper.vm.state).toEqual('read');
  });

  it('change state to update.', () => {
    wrapper.find('#change-to-update').trigger('click');
    expect(wrapper.vm.state).toEqual('update');
  });

  it('cancel will back to read.', () => {
    expect(wrapper.vm.state).toEqual('update');
    wrapper.find('#cancel').trigger('click');
    expect(wrapper.vm.state).toEqual('read');
  });
});
