import { Injector } from '@angular/core';
import { MountResponse } from 'cypress/angular';

export class ComponentHelperServiceCy {
	public static getComponentInstance<T>(wrapper: MountResponse<T>) {
		return wrapper.fixture.debugElement.componentInstance as T;
	}

	public static onViewInit<T>(wrapper: MountResponse<T>): Promise<T> {
		return wrapper.fixture.whenRenderingDone();
	}

	public static notifyComponentChanges(wrapper: MountResponse<any>) {
		wrapper.fixture.detectChanges();
	}

	public static getInjector(wrapper: MountResponse<any>): Injector {
		return wrapper.fixture.debugElement.injector;
	}
}
