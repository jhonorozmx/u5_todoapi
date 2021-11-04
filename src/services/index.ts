import ToDosService from "./todos.service";

const todosService = new ToDosService();

/**
 * We should not export the class to use as type.
 *
 * The services should be behind an abstraction like
 * commandBus who knows details about the services
 *
 */

export { todosService, ToDosService };
