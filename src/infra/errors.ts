export class InternalServerError extends Error {
	action: string;
	statusCode: number;
	constructor({ cause }: { cause?: Error } = {}) {
		super("Um erro interno não esperado ocorreu", {
			cause,
		});
		this.name = "InternalServerError";
		this.action = "Entre em contato com o suporte";
		this.statusCode = 500;
	}

	toJSON() {
		return {
			name: this.name,
			message: this.message,
			action: this.action,
			status_code: this.statusCode,
		};
	}
}

export class NotFoundError extends Error {
	action: string;
	statusCode: number;
	constructor({ cause }: { cause?: Error } = {}) {
		super("Não foi possivel encontrar os dados", {
			cause,
		});
		this.name = "NotFoundError";
		this.action = "Verifique se os dados estão corretos";
		this.statusCode = 404;
	}

	toJSON() {
		return {
			name: this.name,
			message: this.message,
			action: this.action,
			status_code: this.statusCode,
		};
	}
}
