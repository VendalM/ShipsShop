import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService{

  constructor() { }

  createDb() {
    const spaceShips = [
      {id: 1, name: 'GO Ms Chief', type: 'High Speed Craft', port: 'Port Canaveral', year: '2005', weight: '441892 кг', mission: 'SES-9, CRS-8, Thaicom 8, ABS-2A / Eutelsat 117W B, JCSAT-16, SES-10, BulgariaSat-1, SES-11 / Echostar 105, KoreaSat 5A, Falcon Heavy Test Flight, TESS, Bangabandhu-1, Telstar 19V, Merah Putih, Telstar 18V, Es’hail 2, Nusantara Satu (PSN-6) / S5 / Beresheet, CCtCap Demo Mission 1, ArabSat 6A, CRS-17, Starlink v0.9, STP-2, Starlink 1, JCSat 18 / Kacific 1, Starlink 2, Starlink 3, Starlink 4, Starlink 5'},
      {id: 2, name: 'A Shortfall of Gravitas', type: 'Barge', port: 'Port Canaveral', year: '2014', weight: '540892 кг', mission: 'SES-9, CRS-8, Thaicom 8, ABS-2A / Eutelsat 117W B, JCSAT-16, SES-10, BulgariaSat-1, SES-11 / Echostar 105, KoreaSat 5A, Falcon Heavy Test Flight, TESS, Bangabandhu-1, Telstar 19V, Merah Putih, Telstar 18V, Es’hail 2, Nusantara Satu (PSN-6) / S5 / Beresheet, CCtCap Demo Mission 1, ArabSat 6A, CRS-17, Starlink v0.9, STP-2, Starlink 1, JCSat 18 / Kacific 1, Starlink 2, Starlink 3, Starlink 4, Starlink 5'},
      {id: 3, name: 'American Islander', type: 'Cargo', port: 'Port of Los Angeles', year: '2017', weight: '440992 кг', mission: 'SES-9, CRS-8, Thaicom 8, ABS-2A / Eutelsat 117W B, JCSAT-16, SES-10, BulgariaSat-1, SES-11 / Echostar 105, KoreaSat 5A, Falcon Heavy Test Flight, TESS, Bangabandhu-1, Telstar 19V, Merah Putih, Telstar 18V, Es’hail 2, Nusantara Satu (PSN-6) / S5 / Beresheet, CCtCap Demo Mission 1, ArabSat 6A, CRS-17, Starlink v0.9, STP-2, Starlink 1, JCSat 18 / Kacific 1, Starlink 2, Starlink 3, Starlink 4, Starlink 5'},
      {id: 4, name: 'Hollywood', type: 'Tug', port: 'Fort Lauderdale', year: '2021', weight: '444292 кг', mission: 'SES-9, CRS-8, Thaicom 8, ABS-2A / Eutelsat 117W B, JCSAT-16, SES-10, BulgariaSat-1, SES-11 / Echostar 105, KoreaSat 5A, Falcon Heavy Test Flight, TESS, Bangabandhu-1, Telstar 19V, Merah Putih, Telstar 18V, Es’hail 2, Nusantara Satu (PSN-6) / S5 / Beresheet, CCtCap Demo Mission 1, ArabSat 6A, CRS-17, Starlink v0.9, STP-2, Starlink 1, JCSat 18 / Kacific 1, Starlink 2, Starlink 3, Starlink 4, Starlink 5'},
      {id: 5, name: 'Of Course I Still Love You', type: 'Barge', port: 'Port Canaveral', year: '2014', weight: '940892 кг', mission: 'SES-9, CRS-8, Thaicom 8, ABS-2A / Eutelsat 117W B, JCSAT-16, SES-10, BulgariaSat-1, SES-11 / Echostar 105, KoreaSat 5A, Falcon Heavy Test Flight, TESS, Bangabandhu-1, Telstar 19V, Merah Putih, Telstar 18V, Es’hail 2, Nusantara Satu (PSN-6) / S5 / Beresheet, CCtCap Demo Mission 1, ArabSat 6A, CRS-17, Starlink v0.9, STP-2, Starlink 1, JCSat 18 / Kacific 1, Starlink 2, Starlink 3, Starlink 4, Starlink 5'},
      {id: 6, name: 'Summer', type: 'Barge', port: 'Port Canaveral', year: '2022', weight: '1040892 кг', mission: 'SES-9, CRS-8, Thaicom 8, ABS-2A / Eutelsat 117W B, JCSAT-16, SES-10, BulgariaSat-1, SES-11 / Echostar 105, KoreaSat 5A, Falcon Heavy Test Flight, TESS, Bangabandhu-1, Telstar 19V, Merah Putih, Telstar 18V, Es’hail 2, Nusantara Satu (PSN-6) / S5 / Beresheet, CCtCap Demo Mission 1, ArabSat 6A, CRS-17, Starlink v0.9, STP-2, Starlink 1, JCSat 18 / Kacific 1, Starlink 2, Starlink 3, Starlink 4, Starlink 5'},
      {id: 7, name: 'Curdle', type: 'Cargo', port: 'Port of Los Angeles', year: '2021', weight: '640892 кг', mission: 'SES-9, CRS-8, Thaicom 8, ABS-2A / Eutelsat 117W B, JCSAT-16, SES-10, BulgariaSat-1, SES-11 / Echostar 105, KoreaSat 5A, Falcon Heavy Test Flight, TESS, Bangabandhu-1, Telstar 19V, Merah Putih, Telstar 18V, Es’hail 2, Nusantara Satu (PSN-6) / S5 / Beresheet, CCtCap Demo Mission 1, ArabSat 6A, CRS-17, Starlink v0.9, STP-2, Starlink 1, JCSat 18 / Kacific 1, Starlink 2, Starlink 3, Starlink 4, Starlink 5'},
      {id: 8, name: 'Alchemist', type: 'High Speed Craft', port: 'Port Canaveral', year: '2020', weight: '540892 кг', mission: 'SES-9, CRS-8, Thaicom 8, ABS-2A / Eutelsat 117W B, JCSAT-16, SES-10, BulgariaSat-1, SES-11 / Echostar 105, KoreaSat 5A, Falcon Heavy Test Flight, TESS, Bangabandhu-1, Telstar 19V, Merah Putih, Telstar 18V, Es’hail 2, Nusantara Satu (PSN-6) / S5 / Beresheet, CCtCap Demo Mission 1, ArabSat 6A, CRS-17, Starlink v0.9, STP-2, Starlink 1, JCSat 18 / Kacific 1, Starlink 2, Starlink 3, Starlink 4, Starlink 5'},
    ]

    return {spaceShips};
  }
}
