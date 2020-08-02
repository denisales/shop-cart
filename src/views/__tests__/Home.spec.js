import { shallowMount, mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import '@/filters';

describe('Home.vue', () => {
  it('Renderizar 1 produtos quando products conter somente 1 produto', async () => {
    const wrapper = shallowMount(Home);
    await wrapper.setData({
      loading: false,
      products: [{
        sku: 8552515751438644,
        title: 'Camisa Nike Corinthians I',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Branco com listras pretas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true,
      }],
    });
    const product = wrapper.findAll('[data-testid="CardProduct"]');
    expect(product.length).toBe(1);
  });

  it('O produto deve conter os textos de acordo com os valores passados', async () => {
    const wrapper = shallowMount(Home);
    await wrapper.setData({
      loading: false,
      products: [{
        sku: 8552515751438644,
        title: 'Camisa Nike Corinthians I',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Branco com listras pretas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true,
      }],
    });
    expect(wrapper.text()).toContain('Camisa Nike Corinthians I');
    // problemas ao formatar moeda no node e na web
    expect(wrapper.text()).toContain('229');
    expect(wrapper.text()).toContain('ou 9 x');
    expect(wrapper.text()).toContain('25');
  });

  it('Ao clicar em um produto deve aparecer um modal "ProductView"', async () => {
    const wrapper = mount(Home, { sync: false });
    await wrapper.setData({
      loading: false,
      products: [{
        sku: 8552515751438644,
        title: 'Camisa Nike Corinthians I',
        description: '14/15 s/nº',
        availableSizes: ['S', 'G', 'GG', 'GGG'],
        style: 'Branco com listras pretas',
        price: 229.9,
        installments: 9,
        currencyId: 'BRL',
        currencyFormat: 'R$',
        isFreeShipping: true,
      }],
    });

    // Problemas ao testar componentes que usam portal, ignorar alertas sobre o portal
    const productThumb = wrapper.find('[data-testid="CardProductThumb"]');
    await productThumb.trigger('click');
    const hasProductView = wrapper.find('[data-testid="ProductView"]').exists();
    expect(hasProductView).toBe(true);
  });
});
