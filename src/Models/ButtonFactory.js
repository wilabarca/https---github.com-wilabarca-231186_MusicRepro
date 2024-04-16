export class ButtonFactory {
    static createButton(id, iconClass) {
      const button = document.createElement('button');
      button.id = id;
      const icon = document.createElement('i');
      icon.className = iconClass;
      button.appendChild(icon);
      return button;
    }
  }
  