<template>
  <div class="address">
    <el-col :span="7">
      <el-select
        v-model="publicForm.province"
        style="width: 100%;"
        placeholder="请选择省级地区"
        @change="getProv($event)"
      >
        <el-option
          v-for="item in provinces"
          :key="item.name"
          :label="item.name"
          :value="item.name"
        ></el-option>
      </el-select>
    </el-col>
    <el-col class="select-line" :span="1">-</el-col>
    <el-col :span="7">
      <el-select
        v-model="publicForm.city"
        style="width: 100%;"
        placeholder="请选择区级地区"
        @change="getCity($event)"
      >
        <el-option
          v-for="item in citys"
          :key="item.name"
          :label="item.name"
          :value="item.name"
        ></el-option>
      </el-select>
    </el-col>
    <el-col class="select-line" :span="1">-</el-col>
    <el-col :span="8">
      <el-select
        v-model="publicForm.region"
        style="width: 100%;"
        placeholder="请选择市级地区"
        @change="getRegion($event)"
      >
        <el-option
          v-for="item in regions"
          :key="item.name"
          :label="item.name"
          :value="item.name"
        ></el-option>
      </el-select>
    </el-col>
  </div>
</template>

<script>
import '~/assets/css/form-city-select.less'
import allRegionList from '~/static/js/city'

export default {
  name: 'FormCitySelect',
  props: {
    province: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    region: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      publicForm: {
        province: this.province,
        city: this.city,
        region: this.region
      },
      provinces: allRegionList,
      citys: [],
      regions: [],
      chooseProv: ''
    }
  },
  mounted() {},
  methods: {
    getProv: function(prov) {
      const tempCity = this.getChildren(prov, this.provinces, 0)
      this.citys = tempCity
      this.regions = []
      this.chooseProv = prov
      this.publicForm.city = ''
      this.publicForm.region = ''

      this.onChangeValue()
    },
    getCity: function(city) {
      const tempRegion = this.getChildren(city, this.provinces, 1)
      this.regions = tempRegion
      this.publicForm.region = ''

      this.onChangeValue()
    },
    getRegion: function(region) {
      this.publicForm.region = region

      this.onChangeValue()
    },
    onChangeValue: function() {
      this.$emit('change', this.publicForm)
    },
    getChildren: function(regionName, regionData, level) {
      let tempData = []
      if (level === 0) {
        for (const _item of regionData) {
          if (_item.name === regionName) {
            tempData = _item.sub
          }
        }
      } else {
        const cityData = this.getChildren(this.chooseProv, this.provinces, 0)
        return this.getChildren(regionName, cityData, 0)
      }
      return tempData
    }
  }
}
</script>
