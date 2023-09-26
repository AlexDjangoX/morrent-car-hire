import { revalidatePath } from 'next/cache';
import { deleteCar } from '../actions/car.actions';

export async function deleteCarRevalidate(
  carId: string
): Promise<{ message: string }> {
  try {
    await deleteCar(carId);
    revalidatePath('/profile');
    console.log({ message: 'Success' });
    return { message: 'Success' };
  } catch (event: any) {
    console.log({ message: `There was an error: ${event.message}` });
    return { message: `There was an error: ${event.message}` };
  }
}
