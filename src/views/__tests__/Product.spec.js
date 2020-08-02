import { shallowMount } from '@vue/test-utils';
import Product from '@/views/Product.vue';
import '@/filters';

describe('Product.vue', () => {
  it('Componente deve mostrar todos os textos de acordo com os dados recebidos', async () => {
    const wrapper = shallowMount(Product, {
      propsData: {
        product: {
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
        },
      },
    });

    expect(wrapper.text()).toContain('Camisa Nike Corinthians I');
    expect(wrapper.text()).toContain('14/15 s/nº');
    expect(wrapper.text()).toContain('Branco com listras pretas');
    expect(wrapper.text()).toContain('Frete Gratis');
    expect(wrapper.text()).toContain('Adicionar à sacola');
    expect(wrapper.text()).toContain('FECHAR');
  });
});
