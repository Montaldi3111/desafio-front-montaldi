import Card from '@/app/components/HomeCard/Card';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Home/Card',
    component: Card,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof Card>;

  const card1 = {
    head: "Tranferí dinero",
    content: "Desde Digital Money House vas a poder transferir dinero a otras cuentas, así como también recibir transferencias y nuclear tu capital en nuestra billetera virtual"
  }

  const card2 = {
    head: "Pago de servicios",
    content: "Pagá mensualmente los servicios en 3 simples clicks. Fácil, rápido y conveniente. Olvidate de las facturas en papel"
  }

export const Primary : Story = {
    args: {
        message: card1
    }
}

export const Secondary : Story = {
  args: {
    message: card2
  }
}
export default meta;
type Story = StoryObj<typeof meta>;