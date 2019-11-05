import { Pipe, PipeTransform } from '@angular/core';
import { PedidoItemEntity } from '../_services/pedido.service';

@Pipe({
  name: 'TotalPedido',
  pure: false
  })
export class TotalPedidoPipe implements PipeTransform {

  transform(items: PedidoItemEntity[]): number {
    return items.reduce((total, item) => {
      return total + (item['qtdade'] *item['vlrunit']);
    }, 0);
  }

}
