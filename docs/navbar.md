# Navbar
> sources:  
[js/components/navbar](../src/js/components/navbar.vue)  
[js/components/navbar-brand](../src/js/components/navbar-brand.vue)  
[js/components/navbar-toggle](../src/js/components/navbar-toggle.vue)  
[js/components/navbar-nav](../src/js/components/navbar-nav.vue)  
[js/components/nav-item](../src/js/components/nav-item.vue)

## Usage
### Basic
```html
<navbar>
  <navbar-brand href="/" type="text" slot="brand">COSMOS</navbar-brand>
  <navbar-nav>
    <nav-item href='#'>Link 1</nav-item>
    <nav-item href='#'>Link 2</nav-item>
    <nav-item>
      <dropdown>
        <button slot="button">Dropdown</button>
        <a href="#">sub1</a>
        <a href="#">sub2</a>
        <a href="#">sub3</a>
      </dropdown>
    </nav-item>
  </navbar-nav>
</navbar>
```

### Multiple navigations
```html
<navbar align="between">
  <navbar-brand href="/" type="text" slot="brand">COSMOS</navbar-brand>
  <navbar-nav>
    <nav-item href='#'>Left 1</nav-item>
    <nav-item href='#'>Left 2</nav-item>
  </navbar-nav>
  <navbar-nav>
    <nav-item href='#'>Right 1</nav-item>
    <nav-item href='#'>Right 2</nav-item>
  </navbar-nav>
</navbar>
```

## Props
### navbar
| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| align | String | Alignment of nav-body(It is flex-items). | '' (flex-start) |
| header-align | Strign | Alignment of nav-header. | '' (flex-start) |

**Note** Available alignment keywords: start, end, center, between and around.

### navbar-brand
| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| href | String | Link url. | '/' |
| type | String | image or text | 'image' |

### nav-item
| name | type | description | default |
| ---- | ---- | ----------- | ------- |
| href | String | Link url. | '' |
| text | String | text content value | '' |
